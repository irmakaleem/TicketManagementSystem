import React from "react";

const Header = () => {
  return (
    <header className="header px-4 sm:px-6 h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-white dark:bg-dark-card rounded-none xl:rounded-15 flex items-center mb-4 xl:m-4 group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_32px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_32px)] ac-transition">
      <div className="flex-center-between grow">
        {/* Header Left */}
        <div className="flex items-center gap-4">
          <div className="menu-hamburger-container flex-center">
            <button
              type="button"
              id="app-menu-hamburger"
              className="menu-hamburger hidden xl:block"
            />
            <button
              type="button"
              className="menu-hamburger block xl:hidden"
              data-drawer-target="app-menu-drawer"
              data-drawer-show="app-menu-drawer"
              aria-controls="app-menu-drawer"
            />
          </div>
          <div className="w-56 md:w-72 leading-none text-sm relative text-gray-900 dark:text-dark-text hidden sm:block">
            <span className="absolute top-1/2 -translate-y-[40%] left-3.5">
              <i className="ri-search-line text-gray-900 dark:text-dark-text text-[14px]" />
            </span>
            <input
              type="text"
              name="header-search"
              id="header-search"
              placeholder="Search..."
              className="bg-transparent pl-[36px] pr-12 py-4 dk-border-one rounded-full w-full font-spline_sans focus:outline-none focus:border-primary-500"
            />
            <span className="absolute top-1/2 -translate-y-[40%] right-4 hidden lg:flex lg:items-center lg:gap-0.5 select-none">
              <i className="ri-command-line text-[12px]" />
              <span>+</span>
              <span>k</span>
            </span>
          </div>
        </div>
        {/* Header Right */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Dark Light Button
          <button
            type="button"
            className="themeMode size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            onclick="toggleThemeMode()"
          >
            <i className="ri-contrast-2-line text-[22px] dark:text-dark-text-two dark:before:!content-['\f1bf']" />
          </button> */}
          {/* Settings Button */}
          <button
            type="button"
            className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            data-drawer-target="app-setting-drawer"
            data-drawer-show="app-setting-drawer"
            data-drawer-placement="right"
            aria-controls="app-setting-drawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[22px] dark:text-dark-text-two animate-spin-slow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>

          {/* Notification Button */}
          {/* Notification Button */}
          <div className="relative">
            <button
              type="button"
              data-popover-target="dropdownNotification"
              data-popover-trigger="click"
              data-popover-placement="bottom-end"
              className="relative size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[22px] dark:text-dark-text-two"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <span className="absolute -top-1 -right-1 size-4 rounded-50 flex-center bg-primary-500 leading-none text-xs text-white">
                0
              </span>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownNotification"
              className="!-right-full sm:!right-0 z-backdrop invisible w-[250px] sm:w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-dark-card-two dark:divide-dark-border-four"
            >
              <div className="block px-4 py-2 font-medium text-center text-heading rounded-t-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white">
                Notifications
              </div>
              <div className="divide-y divide-gray-100 dark:divide-dark-border-four">
                <a
                  href="notification.html"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="size-10 rounded-50"
                      src="/images/user/user-1.png"
                      alt="user"
                    />
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                      New message from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      : "Hey, what's up? All set for the presentation?"
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a
                  href="notification.html"
                  className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark-icon"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="size-10 rounded-50"
                      src="/images/user/user-2.png"
                      alt="user"
                    />
                  </div>
                  <div className="w-full ps-3">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1.5">
                      New message from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Jese Leos
                      </span>
                      : "Hey, what's up? All set for the presentation?"
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">
                      10 min ago
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="notification.html"
                className="flex-center py-2 text-sm font-medium text-center text-heading rounded-b-lg bg-gray-50 dark:bg-dark-card-shade dark:text-white"
              >
                View all
              </a>
            </div>
          </div>

          {/* Language Select Button */}
          <div className="relative">
            <button
              type="button"
              data-popover-target="dropdownLanguage"
              data-popover-trigger="click"
              data-popover-placement="bottom-end"
              className="size-8 flex-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <img
                id="header-lang-img"
                src="/images/flag/us.svg"
                alt="flag"
                className="size-5 rounded-sm"
                title="English"
              />
            </button>
            {/* Dropdown */}
            <div
              id="dropdownLanguage"
              className="absolute invisible z-backdrop py-2 bg-white rounded-md shadow-md min-w-[10rem] flex flex-col dark:bg-dark-card-shade"
            >
              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                data-lang="en"
                title="English"
              >
                <img
                  src="/images/flag/us.svg"
                  alt="flag"
                  className="object-cover size-4 rounded-50"
                />
                <h6 className="font-medium text-gray-500 dark:text-white">
                  English
                </h6>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                data-lang="sp"
                title="Spanish"
              >
                <img
                  src="/images/flag/es.svg"
                  alt="flag"
                  className="object-cover size-4 rounded-50"
                />
                <h6 className="font-medium text-gray-500 dark:text-white">
                  Spanish
                </h6>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                data-lang="fr"
                title="French"
              >
                <img
                  src="/images/flag/fr.svg"
                  alt="flag"
                  className="object-cover size-4 rounded-50"
                />
                <h6 className="font-medium text-gray-500 dark:text-white">
                  French
                </h6>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                data-lang="it"
                title="Italian"
              >
                <img
                  src="/images/flag/it.svg"
                  alt="flag"
                  className="object-cover size-4 rounded-50"
                />
                <h6 className="font-medium text-gray-500 dark:text-white">
                  Italian
                </h6>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 dark:hover:bg-dark-icon relative after:absolute after:inset-0 after:size-full"
                data-lang="ar"
                title="Arabic"
              >
                <img
                  src="/images/flag/ar.svg"
                  alt="flag"
                  className="object-cover size-4 rounded-50"
                />
                <h6 className="font-medium text-gray-500 dark:text-white">
                  Arabic
                </h6>
              </a>
            </div>
          </div>
          {/* Border */}
          <div className="w-[1px] h-[calc(theme('spacing.header')_-_10px)] sm:h-header bg-[#EEE] dark:bg-dark-border hidden sm:block" />
          {/* User Profile Button */}
          <div className="relative">
            <button
              type="button"
              data-popover-target="dropdownProfile"
              data-popover-trigger="click"
              data-popover-placement="bottom-end"
              className="flex items-center gap-2 sm:pr-4 relative after:absolute after:right-0 after:font-remix after:content-['\ea4e'] after:text-[18px] after:hidden sm:after:block"
            >
              <img
                src="/images/user/profile-img.png"
                alt="user-img"
                className="size-7 sm:size-9 rounded-50"
              />
              <span className="leading-none text-lg text-gray-500 dark:text-dark-text font-semibold capitalize hidden sm:block">
                alex..
              </span>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownProfile"
              className="invisible z-backdrop bg-white text-left divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-dark-card-shade dark:divide-dark-border-four"
            >
              <div className="px-4 py-3 text-sm text-gray-500 dark:text-white">
                <div className="font-medium ">Alex Janson</div>
                <div className="truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="e48588819cd6d4d6d0a48389858d88ca878b89"
                  >
                    [email&nbsp;protected]
                  </a>
                </div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-dark-icon dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  className="flex font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-dark-icon dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
