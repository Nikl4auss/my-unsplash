function NavBar() {
  return (
    <nav className="w-full px-8 flex items-center justify-between">
      <div className="w-[30%] max-w-[40rem] flex items-center gap-8">
        <div>
          <h1>My unsplash</h1>
          <p>devchallenges.io</p>
        </div>
        <input type="text" placeholder="Search by name" className="flex-1 border-2 border-gray-300 px-6 py-4 rounded-xl focus-visible:outline-none focus-visible:border-gray-400" />

      </div>
      <button type="button" className="text-white font-bold bg-green-500 p-4 rounded-xl ">Add a photo</button>
    </nav>
  )
}

export default NavBar
