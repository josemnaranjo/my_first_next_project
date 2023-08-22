const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const Page = async ({ params }) => {
  const user = await getUser(params.id);
  return (
    <div className="bg-slate-400 rounded-md p-10">
      <img
        src={user.avatar}
        alt="user avatar"
        className="m-auto my-4 rounded-full"
      />
      <h3 className="text-3xl font-bold">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>email: {user.email}</p>
    </div>
  );
};

export default Page;
