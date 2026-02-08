import { useContext, useEffect, useState } from "react";
import { LucideEye, LucideEyeOff, LucideX } from "lucide-react";
import { loginUser, signupUser } from "../apis/auth";
import { toast } from "react-hot-toast";
import { UserContext } from "../Providers/UserProvider";
import { Loader } from "./Loader";

export const Modal = ({ onClose, isLogin }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
        >
            <form

                onSubmit={async(e) => {


                    e.preventDefault();
                    setIsLoading(true);

                    try {
                        ///// Make sure below function returns user
                        const fetchedUser = await (isLogin?loginUser(email, password):signupUser(name, email, password));
                        // console.log(name, email, password);
                        console.log("Fetched User:", fetchedUser);

                        setUser(fetchedUser);
                        // console.log("User set in context:", user);
                        // useEffect(() => console.log(user), [user]);

                        onClose();
                        toast.success(`Successfully ${isLogin ? "Logged In" : "Signed Up"}!`);
                    } catch (error) {
                        console.error("Auth failed:", error);
                        toast.error(error.message || "Authentication failed. Please try again.");
                        // Optional: Show error to user
                    } finally {
                        setIsLoading(false);
                    }
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
                                    disabled={isLoading}
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none disabled:opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Password</label>

                                <div className="relative">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? "text" : "password"}
                                        disabled={isLoading}
                                        className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] 
                 focus:outline-none w-full pr-10 disabled:opacity-50"
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
                                disabled={isLoading}
                                className="bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition flex justify-center items-center disabled:opacity-70">
                                {isLoading ? <Loader size={20} className="text-white" /> : "Login"}
                            </button>

                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Full Name</label>
                                <input
                                    onChange={(e) => { setName(e.target.value) }}
                                    type="text"
                                    disabled={isLoading}
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none disabled:opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Email</label>
                                <input
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    type="email"
                                    disabled={isLoading}
                                    className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] focus:outline-none disabled:opacity-50"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-1">Password</label>

                                <div className="relative">
                                    <input
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type={showPassword ? "text" : "password"}
                                        disabled={isLoading}
                                        className="border-2 border-gray-700 rounded-lg p-2 bg-[hsl(var(--background))] 
                 focus:outline-none w-full pr-10 disabled:opacity-50"
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
                                disabled={isLoading}
                                className="bg-green-600 text-white rounded-lg py-2 font-semibold hover:bg-green-700 transition flex justify-center items-center disabled:opacity-70">
                                {isLoading ? <Loader size={20} className="text-white" /> : "Sign Up"}
                            </button>

                        </div>
                    )}

                </div>

            </form>
        </div>
    );
};
