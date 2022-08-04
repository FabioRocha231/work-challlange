
interface TodoActionsParamList {
  userName: string
  setFilter(value: string): void
  setIsOpen(): void
}

export const TodosActions = ({ userName, setFilter, setIsOpen }: TodoActionsParamList) => {
  return (
    <div className="flex items-center justify-evenly py-5">
      <p className="text-lg text-white text-center">
        hello {userName} this is your Todo List
      </p>

      <button className="bg-slate-200 rounded-lg p-2 " onClick={() => {
        setIsOpen()
      }}
      >
        Add a new Todo
      </button>

      <div className="flex items-center justify-center p-2 bg-slate-200 rounded-lg gap-x-2">
        <label htmlFor="filter">Filter:</label>

        <select
          className="bg-transparent"
          id="filter"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        >
          <option value="">All Todos</option>
          <option value="completed">completed</option>
          <option value="todo">Todo</option>
        </select>
      </div>
    </div>
  )
}
