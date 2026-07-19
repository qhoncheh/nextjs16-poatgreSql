import { Link } from "lucide-react"

const Navbar = () => {
  return (
    <header>
      <div>
        <Link href="/"
        className={
          "flex items-center gap-2"
        }
      </div>
    </header>
  )
}

export default Navbar