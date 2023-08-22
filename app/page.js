import Users from "@/components/Users";
const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data;
};

const Page = async () => {
  const users = await fetchUsers();
  const usersData = users.data;
  return (
    <div>
      <Users usersData={usersData} />
    </div>
  );
};

export default Page;
