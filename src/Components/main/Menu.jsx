import { Link, withRouter } from "react-router-dom"
import styles from "./Menu.module.css"
import { isAuthenticated } from "../../auth"

const Menu = ({ history }) => {
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "white" }
    } else {
      return { color: "gray" }
    }
  }

  return (
    <div>
      {!isAuthenticated() ? (
        <div className={styles.nav}>
          <ul>
            <Link
              className={styles.nav_link}
              style={isActive(history, "/signin")}
              to="/signin"
            >
              SignIn
            </Link>
            <Link
              className={styles.nav_link}
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Signup
            </Link>
          </ul>
        </div>
      ) : (
        <div className={styles.nav}>
          <ul>
            <Link
              className={styles.nav_link}
              to={`/user/${isAuthenticated().user._id}`}
              style={
                (isActive(history, `/user/${isAuthenticated().user._id}`),
                { color: "gray" })
              }
            >
              <div>{isAuthenticated().user.name}</div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default withRouter(Menu)
