import React from "react-icons";
function Nav(){
    return(
        <div>
            <div className="flex justify-around p-3 ">
                <div>
                    <h2 className="text-2xl font-semibold text-blue-600">Flipkart</h2>
                    <p><span className=" text-gray-300">Explor</span> <span className="font-semibold text-yellow-400">Plus</span></p>
                </div>

                <div>

                    <input type="text" placeholder="Search Your Product, Brand and more"
                    className="p-2 pr-[100px]"></input>
                </div>

                <div>
                    <p>Become a seller</p>
                </div>

                <div>
                    <p>SANTOSH</p>
                </div>

                <div>
                    <p>Cart</p>
                </div>
                <div>:</div>
            </div>
        </div>
    );
}

export default Nav;