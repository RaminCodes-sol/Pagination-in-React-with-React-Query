

const User = ({ user }) => {

  return (
    <div className="flex flex-col gap-1 text-white bg-purple-500 mb-5 px-4 py-2 rounded-lg">
        <h3>ID: {user.id}</h3>
        <figure>
            <img src={user.image} alt='img' className="rounded-lg"/>
        </figure>
        <h2 className="text-xl font-bold">{user.fullname}</h2>
        <span className="inline-block text-[1rem]">{user.email}</span>
    </div>
  )
}

export default User