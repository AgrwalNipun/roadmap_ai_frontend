import { useContext, useEffect, useState } from "react";
import { LucideEye, LucideEyeOff, LucideX } from "lucide-react";
import { loginUser, signupUser } from "../apis/auth";
import { UserContext } from "../Providers/UserProvider";

export const Modal = ({ onClose, isLogin }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={onClose}
        >
            <form

                onSubmit={async(e) => {


                    e.preventDefault();


                    ///// Make sure below function returns user
                    const fetchedUser = await (isLogin?loginUser(email, password):signupUser(name, email, password));
                    // console.log(name, email, password);
                    console.log("Fetched User:", fetchedUser);

                    setUser(fetchedUser);
                    // console.log("User set in context:", user);
                    // useEffect(() => console.log(user), [user]);

                    onClose();
                }}
            >

                <div
                    className="relative bg-[hsl(var(--background))] p-6 rounded-xl border-2 border-gray-900 w-[90%] max-w-md"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <LucideX
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={onClose}
                    />

                    <h2 className="text-2xl font-bold mb-6">
                        {isLogin ? "Please Login to Continue" : "Please Sign Up to Start "}
                    </h2>

                    {isLogin ? (
                        <div className="flex flex-col gap-4">

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Password</label>

                                <div className="relative">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] 
                 focus:outline-none w-full pr-10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                    >
                                        {showPassword ? <LucideEye /> : <LucideEyeOff />}
                                        {/* Replace with EyeOff when visible if you want */}
                                    </button>
                                </div>
                            </div>

                            <button type="submit"
                                className="bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition">
                                Login
                            </button>

                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Full Name</label>
                                <input
                                    onChange={(e) => { setName(e.target.value) }}
                                    type="text"
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Email</label>
                                <input
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    type="email"
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Password</label>

                                <div className="relative">
                                    <input
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type={showPassword ? "text" : "password"}
                                        className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] 
                 focus:outline-none w-full pr-10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                    >
                                        {showPassword ? <LucideEye /> : <LucideEyeOff />}
                                        {/* Replace with EyeOff when visible if you want */}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="bg-green-600 text-white rounded-lg py-2 font-semibold hover:bg-green-700 transition">
                                Sign Up
                            </button>

                        </div>
                    )}

                </div>

            </form>
        </div>
    );
};
