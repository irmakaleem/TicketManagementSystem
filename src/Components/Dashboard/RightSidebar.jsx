import React from "react";

const RightSidebar = () => {
  return (
    <div className="main-content group-data-[sidebar-size=lg]:xl:ml-[calc(theme('spacing.app-menu')_+_16px)] group-data-[sidebar-size=sm]:xl:ml-[calc(theme('spacing.app-menu-sm')_+_16px)] px-4 ac-transition">
      <div className="card">
        <h2 className="card-title">Form Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-4">
        {/* FORM */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">From</h3>
              <button
                type="button"
                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
              >
                <span className="shrink-0">View Code</span>
                <i className="ri-code-line text-inherit text-[15px]" />
              </button>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="martinahernandezc@gmail.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="**********"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-1"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-1"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
            {/* Prism Code */}
            <div className="p-6 hidden">
              <pre>
                {"                        "}
                <code className="language-markup">
                  {"\n"}
                  {"                            "}&lt;form class="p-6"&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label for="email"
                  {"\n"}
                  {"                                        "}
                  class="form-label"&gt;Email&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;input type="email"
                  id="email" class="form-input" placeholder="
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c8a5a9babca1a6a9a0adbaa6a9a6acadb2ab88afa5a9a1a4e6aba7a5"
                  >
                    [email&nbsp;protected]
                  </a>
                  "{"\n"}
                  {"                                        "}autocomplete="off"
                  required /&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="password"{"\n"}
                  {"                                        "}
                  class="form-label"&gt;Password&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;input
                  type="password" id="password" class="form-input"
                  placeholder="**********"{"\n"}
                  {"                                        "}autocomplete="off"
                  required /&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  items-center gap-2 select-none mb-6"&gt;{"\n"}
                  {"                                    "}&lt;input
                  id="check-s-1" type="checkbox" checked{"\n"}
                  {"                                        "}class="check
                  check-primary-solid size-4 before:text-sm
                  before:leading-none"&gt;{"\n"}
                  {"                                    "}&lt;label
                  for="check-s-1" class="leading-none font-medium text-gray-500
                  dark:text-dark-text text-sm"&gt;Check{"\n"}
                  {"                                        "}Out&lt;/label&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;button type="submit"
                  {"\n"}
                  {"                                    "}class="btn b-solid
                  btn-primary-solid px-5
                  cursor-pointer"&gt;Continue&lt;/button&gt;{"\n"}
                  {"                            "}&lt;/form&gt;{"\n"}
                  {"                        "}
                </code>
                {"\n"}
                {"                    "}
              </pre>
            </div>
            {/* Prism Code */}
          </div>
        </div>
        {/* FORM WITH LIGHT COLOR */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">
                Form with light color
              </h3>
              <button
                type="button"
                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
              >
                <span className="shrink-0">View Code</span>
                <i className="ri-code-line text-inherit text-[15px]" />
              </button>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label htmlFor="email-2" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email-2"
                  className="form-input bg-[#F8F8FC] dark:bg-dark-card-two"
                  placeholder="martinahernandezc@gmail.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password-2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password-2"
                  className="form-input bg-[#F8F8FC] dark:bg-dark-card-two"
                  placeholder="**********"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-2"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-2"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
            {/* Prism Code */}
            <div className="p-6 hidden">
              <pre>
                {"                        "}
                <code className="language-markup">
                  {"\n"}
                  {"                            "}&lt;form class="p-6"&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="email-2"{"\n"}
                  {"                                        "}
                  class="form-label"&gt;Email&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;input type="email"
                  id="email-2" class="form-input bg-[#F8F8FC]
                  dark:bg-dark-card-two"{"\n"}
                  {"                                        "}placeholder="
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="91fcf0e3e5f8fff0f9f4e3fff0fff5f4ebf2d1f6fcf0f8fdbff2fefc"
                  >
                    [email&nbsp;protected]
                  </a>
                  " autocomplete="off" required /&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="password-2"{"\n"}
                  {"                                        "}
                  class="form-label"&gt;Password&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;input
                  type="password" id="password-2" class="form-input bg-[#F8F8FC]
                  dark:bg-dark-card-two"{"\n"}
                  {"                                        "}
                  placeholder="**********" autocomplete="off" required /&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  items-center gap-2 select-none mb-6"&gt;{"\n"}
                  {"                                    "}&lt;input
                  id="check-s-2" type="checkbox" checked{"\n"}
                  {"                                        "}class="check
                  check-primary-solid size-4 before:text-sm
                  before:leading-none"&gt;{"\n"}
                  {"                                    "}&lt;label
                  for="check-s-2" class="leading-none font-medium text-gray-500
                  dark:text-dark-text text-sm"&gt;Check{"\n"}
                  {"                                        "}Out&lt;/label&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;button type="submit"
                  {"\n"}
                  {"                                    "}class="btn b-solid
                  btn-primary-solid px-5
                  cursor-pointer"&gt;Continue&lt;/button&gt;{"\n"}
                  {"                            "}&lt;/form&gt;{"\n"}
                  {"                        "}
                </code>
                {"\n"}
                {"                    "}
              </pre>
            </div>
            {/* Prism Code */}
          </div>
        </div>
        {/* FORM WITH ICON */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">
                Form with icon
              </h3>
              <button
                type="button"
                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
              >
                <span className="shrink-0">View Code</span>
                <i className="ri-code-line text-inherit text-[15px]" />
              </button>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="email-3"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-mail-line text-inherit" />
                  </span>
                  <input
                    type="email"
                    id="email-3"
                    className="form-input rounded-l-none"
                    placeholder="martinahernandezc@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-3"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-lock-unlock-line" />
                  </span>
                  <input
                    type="password"
                    id="password-3"
                    className="form-input rounded-l-none"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-2"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-2"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
            {/* Prism Code */}
            <div className="p-6 hidden">
              <pre>
                {"                        "}
                <code className="language-markup">
                  {"\n"}
                  {"                            "}&lt;form class="p-6"&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="email-3" class="block mb-2 font-medium text-gray-500
                  dark:text-dark-text"&gt;Email&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;div
                  class="flex"&gt;{"\n"}
                  {"                                        "}&lt;span
                  class="form-input-group input-icon !text-gray-900
                  dark:text-dark-text"&gt;{"\n"}
                  {"                                            "}&lt;i
                  class="ri-mail-line text-inherit"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;/span&gt;
                  {"\n"}
                  {"                                        "}&lt;input
                  type="email" id="email-3" class="form-input rounded-l-none"
                  {"\n"}
                  {"                                            "}placeholder="
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="2c414d5e5845424d44495e424d424849564f6c4b414d4540024f4341"
                  >
                    [email&nbsp;protected]
                  </a>
                  " required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="password-3" class="block mb-2 font-medium text-gray-500
                  dark:text-dark-text"&gt;Password&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;div
                  class="flex"&gt;{"\n"}
                  {"                                        "}&lt;span
                  class="form-input-group input-icon !text-gray-900
                  dark:text-dark-text"&gt;{"\n"}
                  {"                                            "}&lt;i
                  class="ri-lock-unlock-line"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;/span&gt;
                  {"\n"}
                  {"                                        "}&lt;input
                  type="password" id="password-3" class="form-input
                  rounded-l-none"{"\n"}
                  {"                                            "}
                  placeholder="**********" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  items-center gap-2 select-none mb-6"&gt;{"\n"}
                  {"                                    "}&lt;input
                  id="check-s-2" type="checkbox" checked{"\n"}
                  {"                                        "}class="check
                  check-primary-solid size-4 before:text-sm
                  before:leading-none"&gt;{"\n"}
                  {"                                    "}&lt;label
                  for="check-s-2" class="leading-none font-medium text-gray-500
                  dark:text-dark-text text-sm"&gt;Check{"\n"}
                  {"                                        "}Out&lt;/label&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;button type="submit"
                  {"\n"}
                  {"                                    "}class="btn b-solid
                  btn-primary-solid px-5
                  cursor-pointer"&gt;Continue&lt;/button&gt;{"\n"}
                  {"                            "}&lt;/form&gt;{"\n"}
                  {"                        "}
                </code>
                {"\n"}
                {"                    "}
              </pre>
            </div>
            {/* Prism Code */}
          </div>
        </div>
        {/* FORM WITH ICON LIGHT COLOR */}
        <div className="col-span-full lg:col-span-6">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">
                Form with icon light color
              </h3>
              <button
                type="button"
                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
              >
                <span className="shrink-0">View Code</span>
                <i className="ri-code-line text-inherit text-[15px]" />
              </button>
            </div>
            <form className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="email-4"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-mail-line text-inherit" />
                  </span>
                  <input
                    type="email"
                    id="email-4"
                    className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two"
                    placeholder="martinahernandezc@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-4"
                  className="block mb-2 font-medium text-gray-500 dark:text-dark-text"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="form-input-group input-icon !text-gray-900 dark:text-dark-text">
                    <i className="ri-lock-unlock-line" />
                  </span>
                  <input
                    type="password"
                    id="password-4"
                    className="form-input rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-2"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-2"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
            {/* Prism Code */}
            <div className="p-6 hidden">
              <pre>
                {"                        "}
                <code className="language-markup">
                  {"\n"}
                  {"                            "}&lt;form class="p-6"&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="email-4" class="block mb-2 font-medium text-gray-500
                  dark:text-dark-text"&gt;Email&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;div
                  class="flex"&gt;{"\n"}
                  {"                                        "}&lt;span
                  class="form-input-group input-icon !text-gray-900
                  dark:text-dark-text"&gt;{"\n"}
                  {"                                            "}&lt;i
                  class="ri-mail-line text-inherit"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;/span&gt;
                  {"\n"}
                  {"                                        "}&lt;input
                  type="email" id="email-4" class="form-input rounded-l-none
                  bg-[#F8F8FC] dark:bg-dark-card-two"{"\n"}
                  {"                                            "}placeholder="
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="dbb6baa9afb2b5bab3bea9b5bab5bfbea1b89bbcb6bab2b7f5b8b4b6"
                  >
                    [email&nbsp;protected]
                  </a>
                  " required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="mb-4"&gt;
                  {"\n"}
                  {"                                    "}&lt;label
                  for="password-4" class="block mb-2 font-medium text-gray-500
                  dark:text-dark-text"&gt;Password&lt;/label&gt;{"\n"}
                  {"                                    "}&lt;div
                  class="flex"&gt;{"\n"}
                  {"                                        "}&lt;span
                  class="form-input-group input-icon !text-gray-900
                  dark:text-dark-text"&gt;{"\n"}
                  {"                                            "}&lt;i
                  class="ri-lock-unlock-line"&gt;&lt;/i&gt;{"\n"}
                  {"                                        "}&lt;/span&gt;
                  {"\n"}
                  {"                                        "}&lt;input
                  type="password" id="password-4" class="form-input
                  rounded-l-none bg-[#F8F8FC] dark:bg-dark-card-two"{"\n"}
                  {"                                            "}
                  placeholder="**********" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  items-center gap-2 select-none mb-6"&gt;{"\n"}
                  {"                                    "}&lt;input
                  id="check-s-2" type="checkbox" checked{"\n"}
                  {"                                        "}class="check
                  check-primary-solid size-4 before:text-sm
                  before:leading-none"&gt;{"\n"}
                  {"                                    "}&lt;label
                  for="check-s-2" class="leading-none font-medium text-gray-500
                  dark:text-dark-text text-sm"&gt;Check{"\n"}
                  {"                                        "}Out&lt;/label&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;button type="submit"
                  {"\n"}
                  {"                                    "}class="btn b-solid
                  btn-primary-solid px-5
                  cursor-pointer"&gt;Continue&lt;/button&gt;{"\n"}
                  {"                            "}&lt;/form&gt;{"\n"}
                  {"                        "}
                </code>
                {"\n"}
                {"                    "}
              </pre>
            </div>
            {/* Prism Code */}
          </div>
        </div>
        {/* INFO FORM */}
        <div className="col-span-full">
          <div className="card p-0">
            <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
              <h3 className="text-lg card-title leading-none">Info From</h3>
              <button
                type="button"
                className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
              >
                <span className="shrink-0">View Code</span>
                <i className="ri-code-line text-inherit text-[15px]" />
              </button>
            </div>
            <form className="p-6">
              <div className="flex lg:flex-row flex-col gap-x-4">
                <div className="w-full mb-4">
                  <label htmlFor="full_name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="form-input"
                    placeholder="Martina Hernandezc"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="address-1" className="form-label">
                    Address
                  </label>
                  <input
                    type="address"
                    id="address-1"
                    className="form-input"
                    placeholder="6391 Elgin St. Celina, Delaware 10299"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-4">
                <div className="w-full mb-4">
                  <label htmlFor="email-5" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-5"
                    className="form-input"
                    placeholder="martinahernandezc@gmail.com"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="password-5" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password-5"
                    className="form-input"
                    placeholder="**********"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 select-none mb-6">
                <input
                  id="check-s-1"
                  type="checkbox"
                  defaultChecked
                  className="check check-primary-solid size-4 before:text-sm before:leading-none"
                />
                <label
                  htmlFor="check-s-1"
                  className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
                >
                  Check Out
                </label>
              </div>
              <button
                type="submit"
                className="btn b-solid btn-primary-solid px-5 cursor-pointer"
              >
                Continue
              </button>
            </form>
            {/* Prism Code */}
            <div className="p-6 hidden">
              <pre>
                {"                        "}
                <code className="language-markup">
                  {"\n"}
                  {"                            "}&lt;form class="p-6"&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  lg:flex-row flex-col gap-x-4"&gt;{"\n"}
                  {"                                    "}&lt;div class="w-full
                  mb-4"&gt;{"\n"}
                  {"                                        "}&lt;label
                  for="full_name" class="form-label"&gt;Full{"\n"}
                  {"                                            "}
                  Name&lt;/label&gt;{"\n"}
                  {"                                        "}&lt;input
                  type="text" id="full_name" class="form-input"
                  placeholder="Martina Hernandezc"{"\n"}
                  {"                                            "}
                  autocomplete="off" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                    "}&lt;div class="w-full
                  mb-4"&gt;{"\n"}
                  {"                                        "}&lt;label
                  for="address-1"{"\n"}
                  {"                                            "}
                  class="form-label"&gt;Address&lt;/label&gt;{"\n"}
                  {"                                        "}&lt;input
                  type="address" id="address-1" class="form-input"{"\n"}
                  {"                                            "}
                  placeholder="6391 Elgin St. Celina, Delaware 10299"
                  autocomplete="off" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  lg:flex-row flex-col gap-x-4"&gt;{"\n"}
                  {"                                    "}&lt;div class="w-full
                  mb-4"&gt;{"\n"}
                  {"                                        "}&lt;label
                  for="email-5"{"\n"}
                  {"                                            "}
                  class="form-label"&gt;Email&lt;/label&gt;{"\n"}
                  {"                                        "}&lt;input
                  type="email" id="email-5" class="form-input"{"\n"}
                  {"                                            "}placeholder="
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="513c302325383f303934233f303f35342b3211363c30383d7f323e3c"
                  >
                    [email&nbsp;protected]
                  </a>
                  " autocomplete="off" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                    "}&lt;div class="w-full
                  mb-4"&gt;{"\n"}
                  {"                                        "}&lt;label
                  for="password-5"{"\n"}
                  {"                                            "}
                  class="form-label"&gt;Password&lt;/label&gt;{"\n"}
                  {"                                        "}&lt;input
                  type="password" id="password-5" class="form-input"
                  placeholder="**********"{"\n"}
                  {"                                            "}
                  autocomplete="off" required /&gt;{"\n"}
                  {"                                    "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;div class="flex
                  items-center gap-2 select-none mb-6"&gt;{"\n"}
                  {"                                    "}&lt;input
                  id="check-s-1" type="checkbox" checked{"\n"}
                  {"                                        "}class="check
                  check-primary-solid size-4 before:text-sm
                  before:leading-none"&gt;{"\n"}
                  {"                                    "}&lt;label
                  for="check-s-1" class="leading-none font-medium text-gray-500
                  dark:text-dark-text text-sm"&gt;Check{"\n"}
                  {"                                        "}Out&lt;/label&gt;
                  {"\n"}
                  {"                                "}&lt;/div&gt;{"\n"}
                  {"                                "}&lt;button type="submit"
                  {"\n"}
                  {"                                    "}class="btn b-solid
                  btn-primary-solid px-5
                  cursor-pointer"&gt;Continue&lt;/button&gt;{"\n"}
                  {"                            "}&lt;/form&gt;{"\n"}
                  {"                        "}
                </code>
                {"\n"}
                {"                    "}
              </pre>
            </div>
            {/* Prism Code */}
          </div>
        </div>
        {/* DATA FORM */}
        <DataForm />
      </div>
    </div>
  );
};

const DataForm = () => {
  return (
    <div className="col-span-full">
      <div className="card p-0">
        <div className="flex-center-between p-6 pb-4 border-b border-gray-200 dark:border-dark-border">
          <h3 className="text-lg card-title leading-none">Data From</h3>
          <button
            type="button"
            className="btn b-light btn-primary-light btn-sm prism-toggle !py-2.5 focus:bg-primary-500 focus:text-white dark:!bg-dark-icon"
          >
            <span className="shrink-0">View Code</span>
            <i className="ri-code-line text-inherit text-[15px]" />
          </button>
        </div>
        <form className="p-6">
          <div className="flex lg:flex-row flex-col gap-x-4">
            <div className="w-full mb-4">
              <label htmlFor="full_name_data" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="full_name_data"
                className="form-input"
                placeholder="Savannah Nguyen"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="email-6" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email-6"
                className="form-input"
                placeholder="martinahernandezc@gmail.com"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="password-6" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password-6"
                className="form-input"
                placeholder="**********"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-x-4 mb-2">
            <div className="w-full mb-4">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="address"
                id="location"
                className="form-input"
                placeholder="6391 Elgin St. Celina, Delaware 10299"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                placeholder="(+33)7 55 55 33 70"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                id="state"
                className="form-input"
                placeholder="8080 Railroad St."
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <textarea className="summernote" defaultValue={""} />
          </div>
          <div className="flex items-center gap-2 select-none mb-6">
            <input
              id="check-s-1"
              type="checkbox"
              defaultChecked
              className="check check-primary-solid size-4 before:text-sm before:leading-none"
            />
            <label
              htmlFor="check-s-1"
              className="leading-none font-medium text-gray-500 dark:text-dark-text text-sm"
            >
              Check Out
            </label>
          </div>
          <button
            type="submit"
            className="btn b-solid btn-primary-solid px-5 cursor-pointer"
          >
            Save &amp; Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSidebar;
