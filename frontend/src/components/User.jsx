import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();

  console.log(state.user);
  return (
    <div>
      <p className="text-2xl">{state?.user?.name}</p>
      <p className="text-2xl">{state?.user?.email}</p>
      <p className="text-2xl">{state?.user?.dateOfBirth}</p>
      <p className="text-2xl">{state?.user?.mobileNumber}</p>

      {/* <button className="bg-red-600 text-white p-2.5 rounded-4xl">
        Delete User
      </button> */}
    </div>
  );
}

export default User;