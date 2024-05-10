import { BsImages, BsPeopleFill, BsChatLeftText } from "react-icons/bs";

export const SideBar = (userRole) => {
  let navActiveObj = { album: "active" };
  if (
    window.location.href.includes("albums") ||
    window.location.href.endsWith(`${window.location.host}/`)
  ) {
    navActiveObj = { album: "active" };
  } else if (window.location.href.includes("posts")) {
    navActiveObj = { posts: "active" };
  } else if (window.location.href.includes("users")) {
    navActiveObj = { user: "active" };
  } else {
    navActiveObj = {};
  }

  return (
    <>
      <div
        className="col-2 border border-color d-block d-sm-none d-lg-none d-md-none"
        style={{ textAlign: "center", backgroundColor: "#e6e6ff" }}
      >
        <ul className="nav nav-pills flex-column mb-auto mt-2">
          <li className="nav-item" style={{ padding: "0.25rem" }}>
            <a
              href={`${window.location.origin}/albums`}
              className={`nav-link text-dark ${navActiveObj?.album}`}
              aria-current="page"
            >
              <BsImages />
            </a>
          </li>
          <li className="nav-item">
            <a
              href={`${window.location.origin}/posts`}
              className={`nav-link text-dark ${navActiveObj?.posts}`}
            >
              <BsChatLeftText />
            </a>
          </li>
          {userRole.role === "admin" && (
            <li className="nav-item">
              <a
                href={`${window.location.origin}/users`}
                className={`nav-link text-dark ${navActiveObj?.user}`}
              >
                <BsPeopleFill />
              </a>
            </li>
          )}
        </ul>
      </div>

      <div
        className="col-2 border border-color d-none d-sm-block"
        style={{ textAlign: "center", backgroundColor: "#e6e6ff" }}
      >
        <ul className="nav nav-pills flex-column mb-auto mt-2">
          <li className="nav-item">
            <a
              href={`${window.location.origin}/albums`}
              className={`nav-link text-dark ${navActiveObj?.album}`}
              aria-current="page"
            >
              ALBUMS
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}/posts`}
              className={`nav-link text-dark ${navActiveObj?.posts}`}
            >
              POSTS
            </a>
          </li>
          {userRole.role === "admin" && (
            <li>
              <a
                href={`${window.location.origin}/users`}
                className={`nav-link text-dark ${navActiveObj?.user}`}
              >
                USERS
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
