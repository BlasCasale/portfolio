
const CodeAndDeploy = ({ code, style }) => {
  return (
    <a href={code} target="_blank" rel="noopener noreferrer"><i className={`bi bi-code-slash iconCustom ${style}Color`}></i></a>
  )
}

export default CodeAndDeploy