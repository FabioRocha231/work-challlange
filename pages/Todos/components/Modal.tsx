import { useRef, useState } from 'react';
import Modal from 'react-modal'
import { ImCross } from 'react-icons/im'
import { toast } from 'react-toastify';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');

interface NewTodoModalParamList {
  isOpen: boolean
  closeModal(): void

}

Modal.setAppElement('#__next');
export function NewTodoModal({ isOpen, closeModal }: NewTodoModalParamList) {
  const inputRef = useRef<HTMLInputElement>(null)
  const optionRef = useRef<HTMLSelectElement>(null)
  const [newTodo, setNewTodo] = useState<{ todo: string, completed: boolean }>({
    todo: '',
    completed: false
  })

  const handleClick = () => {
    if (optionRef.current?.value === "") {
      return toast.error("completed must be true or false, not empty")
    }
    if (inputRef.current?.value.length! < 3)
      return toast.error("your todo must be longer than 3 characters")
    setNewTodo({
      todo: inputRef.current?.value!,
      completed: optionRef.current?.value === "true" ? true : false
    })
    toast.success("success you create a new todo")
  }

  return (
    <div className=''>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><ImCross /></button>
        <div className='flex flex-col w-60 h-60 items-center justify-center'>
          <form className="flex flex-col justify-evenly my-5">
            <input ref={inputRef} placeholder='Enter you todo' className='border-2 text-center rounded-lg border-slate-800' />

            <span className='flex items-center justify-center mt-5 p-2 bg-emerald-200 rounded-lg '>
              <label htmlFor="filter">Finished:</label>
              <select
                ref={optionRef}
                className="bg-transparent"
                id="filter"
              >
                <option value=""></option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </span>
            <button
              className='text-white my-5 bg-sky-500 p-2 rounded-lg hover:bg-sky-300'
              onClick={(e) => {
                handleClick()
                e.preventDefault()
              }}
            >
              Add Todo
            </button>
          </form>
        </div>

      </Modal>
    </div>
  );
}
