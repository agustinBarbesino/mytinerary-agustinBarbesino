import Button from "./Button"


const Footer = () =>{
    return(
        <>
            <div className="h-24  bg-white flex justify-between m-3 p-3">
                <div className="flex flex-col justify-between items-center">
                    <Button text={"Home"}></Button>
                    <Button text={"Cities"}></Button>
                    <Button text={"Login"}></Button>
                </div>
                <div>
                    <h1 className="font-extrabold">Contact Us!</h1>
                    <p>Contact Info</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <h1 className="font-extrabold">Follow Us!</h1>
                    <Button text={"Intagram"}></Button>
                    <Button text={"Facebook"}></Button>
                    <Button text={"X"}></Button>
                </div>
            </div>
        </>
    )
}

export default Footer