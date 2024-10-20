import { useReadContract } from "thirdweb/react";
import { useState, useEffect } from "react";
import { contract } from "@/client";

export default function Context() {
  const [opportunityId, setOpportunityId] = useState<bigint>(BigInt(6)); // Initialize with bigint
  const { data, isPending, error } = useReadContract({
    contract,
    method: "getData",
    params: [opportunityId],
  });

  // Optionally use an effect to log or handle the fetched data
  useEffect(() => {
    if (data && !isPending) {
      console.log("Contract data:", data);
    }
  }, [data, isPending]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      {data ? (
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
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
