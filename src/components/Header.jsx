import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <>
      <header id="header">
        <img src={logo} alt="" />
        <h1>React investment web app calculator</h1>
      </header>
    </>
  )
}
