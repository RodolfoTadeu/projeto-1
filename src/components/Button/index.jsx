import './styles.css'

export const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="button"
      onClick={onClick}>
      {title}
    </button>
  )
}