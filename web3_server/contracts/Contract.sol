// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OpportunityStorage {
    
    // Struct to store opportunity data along with owner's address
    struct Opportunity {
        address owner;
        string[] dataArray;
    }

    // Mapping to store Opportunity data using an ID (e.g., based on transaction count or unique identifier)
    mapping(uint256 => Opportunity) private opportunities;
    
    // Counter for opportunity ID
    uint256 public opportunityCount = 0;

    // Event to be emitted when data is stored
    event OpportunityStored(uint256 opportunityId, address indexed owner);

    // Function to store data
    function storeData(string[] memory _dataArray) public {
        opportunityCount += 1;

        // Store the owner's address and the data array
        opportunities[opportunityCount] = Opportunity({
            owner: msg.sender,
            dataArray: _dataArray
        });

        // Emit the event with the opportunity ID and the owner's address
        emit OpportunityStored(opportunityCount, msg.sender);
    }

    // Function to retrieve data by opportunity ID
    function getData(uint256 _opportunityId) public view returns (address, string[] memory) {
        require(_opportunityId > 0 && _opportunityId <= opportunityCount, "Opportunity does not exist");

        Opportunity storage opportunity = opportunities[_opportunityId];

        return (opportunity.owner, opportunity.dataArray);
    }
}
