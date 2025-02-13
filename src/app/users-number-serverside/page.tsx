export default async function GetUsersNumber() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch users number: ${response.statusText}`);
    }
    const data = await response.json();
    return data.length;
  } catch (error) {
    return <p className="text-red-500">{error as string}</p>;
  }
}
