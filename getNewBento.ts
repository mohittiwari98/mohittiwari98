const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Mohit%20Tiwari&g=mohittiwari98&x=Mohittiwari98&l=mohit-tiwari-mohit98a%20&i=&p=%20https%3A%2F%2Fmohit45.netlify.app&z=154f9";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
