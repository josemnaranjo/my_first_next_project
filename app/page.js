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
      <ul>
        {usersData.map((user) => (
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between "
          >
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100"> email: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
