export const fetchAllowedEmails = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_ALLOWED_EMAIL_API_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch allowed emails");
    }
    const data = await response.json();
    console.log(data);
    return data.allowedEmails;
  } catch (error) {
    console.error("Error fetching allowed emails:", error);
    return [];
  }
};
