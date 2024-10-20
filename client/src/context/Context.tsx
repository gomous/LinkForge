import { useReadContract } from "thirdweb/react";
import { useState, useEffect } from "react";
import { contract } from "@/client";

export default function Context() {
  const [opportunityId, setOpportunityId] = useState<bigint>(BigInt(6)); // Initialize with a default bigint value
  const [inputValue, setInputValue] = useState(''); // State for input value (as string)

  // Fetch the opportunity data
  const { data, isPending: isOpportunityDataPending, error, refetch } = useReadContract({
    contract,
    method: "getData",
    params: [opportunityId],
  });

  // Fetch the opportunity count
  const { data: opportunityCount, isPending: isCountPending } = useReadContract({
    contract,
    method: "opportunityCount",
    params: [],
  });

  // Handle the input change with explicit typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update input value as the user types
  };

  // Handle fetch trigger
  const handleFetch = () => {
    const parsedValue = BigInt(inputValue); // Convert input string to bigint
    setOpportunityId(parsedValue); // Set the opportunityId to fetch
    refetch(); // Trigger refetch to get new data
  };

  useEffect(() => {
    if (data && !isOpportunityDataPending) {
      console.log("Contract data:", data);
    }
  }, [data, isOpportunityDataPending]);

  return (
    <div>
      {/* Display opportunity count at the top */}
      <div>
        {isCountPending ? (
          <p>Loading opportunity count...</p>
        ) : (
          <p><strong>Total Opportunities:</strong> {opportunityCount?.toString()}</p> // Ensure it's converted to string
        )}
      </div>

      <div>
        <label htmlFor="opportunityId">Enter Opportunity ID:</label>
        <input
          type="text"
          id="opportunityId"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleFetch}>Fetch Data</button>
      </div>

      {isOpportunityDataPending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        data && (
          <div>
            {/* Display the Ethereum address */}
            <p><strong>Address:</strong> {data[0]}</p>

            {/* Display the details array */}
            <ul>
              {data[1].map((item, index) => (
                <li key={index}>
                  <strong>Detail {index + 1}:</strong> {item || "N/A"} {/* Handle empty strings */}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
