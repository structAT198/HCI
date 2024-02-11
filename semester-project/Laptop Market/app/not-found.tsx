import Link from "next/link";

function Error_Page()
{
    return(
        <main>
            <div className="error_holder">
                <div className="error_image"></div>
                <h1 className="error_banner">Error 404: Page Does Not Exist!</h1>
                <h2 className="error_description">You followed a link which does not exist.</h2>
                <Link href="/">
                    <button className="error_button">Back To Homepage</button>
                </Link>
            </div>
        </main>
    );
}

export default Error_Page;