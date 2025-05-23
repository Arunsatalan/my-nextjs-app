import React ,{ ReactNode }from 'react'
type BlogLayoutProps = {
  children: ReactNode;
};

const bloglayout =  ({ children }: BlogLayoutProps)  => {
  return (
    <div>
      <h1>hello this is blog layout</h1>
        {children}
    </div>
  )
}

export default bloglayout
