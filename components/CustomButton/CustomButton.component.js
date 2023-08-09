import React from 'react'

function CustomButton({children,nf,...otherProps}) {
  return (
    <button className={`${nf ? 'w-block px-[200px]' : 'w-full'} transition-all h-[6vh] uppercase font-bold bg-black dark:bg-white dark:text-black text-white hover:bg-green-800 dark:hover:text-white`} {...otherProps}>
        {children}
    </button>
  )
}

export default CustomButton



