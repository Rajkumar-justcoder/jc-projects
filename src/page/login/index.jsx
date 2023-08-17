

export const Login = () => {
    return (
        <>
            <div className='background_image text-white  bg-background bg-no-repeat bg-cover'>
                <div className='container m-0 mx-auto flex justify-center items-center w-full h-screen'>
                    <div className=' flex justify-center items-center overflow-hidden w-1/2 h-1/2 bg-[rgba(255,255,255,0.05)] border-l-2 border-solid shadow-[5px_5px_30px_rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-md border-t-2'>
                        <form action='' className='login_form w-full flex justify-center items-center'>
                            <div className="form-inputs w-1/2 flex justify-center items-center flex-col gap-6">
                                <input type='text' />
                                <input type='email' />
                                <input type='password' placeholder="Enter Password" />
                                <input type='password' placeholder="Enter Password" />
                                <button className='login'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
