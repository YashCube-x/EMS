import React from 'react'

export const TasklistNumber = () => {
  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-xl w-[45%] px-6 py-9   bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-6 py-9   bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>

      <div className="rounded-xl w-[45%] px-6 py-9   bg-yellow-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Pending</h3>
      </div>

      <div className="rounded-xl w-[45%] px-6 py-9   bg-pink-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">In Progress</h3>
      </div>
    </div>
  )
}
