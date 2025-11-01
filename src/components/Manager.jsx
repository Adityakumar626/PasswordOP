import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [showEye, setShowEye] = useState(true);
  const [passwordArray, setPasswordArray] = useState([]);

  const showPassword = () => {
    setShowEye(!showEye);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    if (form.site === "" || form.username === "" || form.password === "") {
      toast("⚠️ Please fill all fields!");
      return;
    } else if (
      form.site.length < 4 ||
      form.username.length < 4 ||
      form.password.length < 4
    ) {
      toast("⚠️ Fields must be at least 4 characters long!");
      return;
    } else if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords", //passwords is just to check the local stoarage or it is the local storage key
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      toast("✅ Password Saved!");
      console.log([...passwordArray, { ...form, id: uuidv4() }]);
      setform({ site: "", username: "", password: "" }); // form is the inputs fields in the page.
    } else {
      toast("too short!");
    }
  };

  const deletePassword = (id) => {
    console.log("deleting the pass with id: ", id);
    let c = confirm("Do you want to delete?");
    if (c) {
      toast("‼️ Deleted!");
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const deleteallPassword = (id) => {
    let c = confirm("Sure to delete all passowrd?");
    if (c) {
      toast("⛔️All passwords deleted");
      setPasswordArray([]);
      localStorage.setItem("passwords", JSON.stringify([]));
    }
  };

  const editPassword = (id) => {
    console.log("editing the pass with id: ", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const copyText = (text) => {
    toast("📋 Copied to Clipboard!");
    navigator.clipboard.writeText(text);
  };

  const copyAll = (item) => {
    toast("📋 Copied All to Clipboard");
    const textToCopy = `Site: ${item.site}\nUsername: ${item.username}\nPassword: ${item.password}`;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="p-2 md:p-5 md:mycontainer min-h-[86.8vh] ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-lg text-center text-green-900">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-emerald-600 w-full p-3 text-black py-1"
            type="text"
            name="site"
            placeholder="Enter Website Url"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row w-full gap-8 ">
            <input
              className="rounded-full border border-emerald-600 w-full p-3 text-black py-1"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                className="rounded-full border border-emerald-600 w-full p-3 text-black py-1"
                type={showEye ? "password" : "text"}
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-1 top-1 cursor-pointer "
                onClick={showPassword}
              >
                <img
                  className="p-1"
                  width={26}
                  src={showEye ? "icons/eye.png" : "icons/eyecross.png"}
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center cursor-pointer bg-green-500 gap-2 hover:bg-green-600 w-fit rounded-full px-5 py-2 border-green-900 border-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <div className="flex justify-between">
            <h2 className="text-bold text-2xl py-2">Your Passwords</h2>
            <span className="cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/shlsuhqu.json"
                trigger="hover"
                stroke="bold"
                style={{ width: "50px", height: "40px" }}
                onClick={() => {
                  deleteallPassword();
                }}
              ></lord-icon>
            </span>
          </div>
          {passwordArray.length === 0 && (
            <div className="text-red-600">
              No saved passwords yet. Start by adding one!
            </div>
          )}
          {/* table starts */}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-lg overflow-hidden mb-7">
              <thead className="bg-green-700 text-amber-50">
                <tr>
                  <th>Site</th>
                  <th>Username</th>
                  <th>Passwords</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32 ">
                        <div className="flex justify-center items-center">
                          <a
                            href={
                              item.site.startsWith("http://") ||
                              item.site.startsWith("https://")
                                ? item.site // No need to add https:// if it's already there
                                : `https://${item.site}` // Add https:// if not present
                            }
                            target="_blank"
                          >
                            {item.site}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          {item.username}
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          {item.password}
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        <div className="flex justify-center items-center">
                          <span
                            className="cursor-pointer mx-3"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer mx-3"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/xyfswyxf.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer mx-3"
                            onClick={() => {
                              copyAll(item);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/xuoapdes.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
