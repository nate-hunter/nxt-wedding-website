import './topbar.css';

type NavLinkItem = {
  key: string;
  text: string;
  path: string;
  isIndexPage?: boolean;
};

const NAVLINKS: Array<NavLinkItem> = [
  {
    key: 'home',
    text: 'home',
    path: '/',
    isIndexPage: true,
  },
  {
    key: 'rsvp',
    text: 'rsvp',
    path: '/rsvp',
  },
  // {
  //   key: 'details',
  //   text: 'Details',
  //   path: '/details',
  // },
  // {
  //   key: 'travel',
  //   text: 'travel + stay',
  //   path: '/travel-and-stay',
  // },
  // {
  //   key: 'schedule',
  //   text: 'schedule',
  //   path: '/schedule',
  // },
  // {
  //   key: 'dress-code',
  //   text: 'dress code',
  //   path: '/dress-code',
  // },
  // {
  //   key: 'about-us',
  //   text: 'about us',
  //   path: '/about-us',
  // },
  {
    key: 'gallery',
    text: 'gallery',
    path: '/gallery',
  },
  {
    key: 'love-story',
    text: 'love story',
    path: '/love-story',
  },
  // {
  //   key: 'things-to-do',
  //   text: 'things to do',
  //   path: '/things-to-do',
  // },
  // {
  //   key: 'registry',
  //   text: 'registry',
  //   path: '/registry',
  // },
];

export default function TopBar() {
  return (
    <div className="topbar">
      {/* NAME + DATE */}
      <div className="topbar--title--details">
        <div className="topbar-title-text">
          {/* <h1>Nate</h1> */}
          {/* <h1>+ Lisa</h1> */}
          {/* <h1 style={{ textTransform: 'uppercase' }}>Nate + Lisa</h1> */}
          {/* <h1 style={{ textTransform: 'uppercase' }}>Lisa + Nate</h1> */}
          <h1 style={{ textTransform: 'uppercase' }}>Lisa & Nate</h1>
        </div>
        <h3 className="topbar--title--date">June 14, 2025</h3>
        {/* <h3 className='topbar--title--date'>6 • 14 • 2025</h3> */}
      </div>

      {/* HAMBURGER BUTTON */}
      {/* <div>
        <button className='topbar-nav-toggle'>&#9776;</button>
      </div> */}

      {/* NAV LINKS */}
      <nav>
        {NAVLINKS.map(({ key, text, path }) => {
          return (
            <a
              key={key}
              href={path}
              // TODO: Account for 'active' + 'loading' states
              className="topbar-navlink"
            >
              {text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
