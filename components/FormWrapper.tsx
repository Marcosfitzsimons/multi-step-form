import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    description: string
    children: ReactNode
}

const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
    </div>
  )
}

export default FormWrapper