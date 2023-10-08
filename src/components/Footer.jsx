import Link from "./Link";

const Footer = () => {
    const infoLinks = [
        {
            id: 1,
            name: 'Terms & Conditions'
        },
        {
            id: 2,
            name: 'Shipping Policy'
        },
        {
            id: 3,
            name: 'Return Policy'
        },
        {
            id: 4,
            name: 'Privacy Policy'
        },
        {
            id: 5,
            name: 'Customs & Duty Fees'
        },
    ];

    const supportLinks = [
        {
            id: 1,
            name: 'FAQ'
        },
        {
            id: 2,
            name: 'Contact Us'
        },
    ];

    return (
        <div className="w-full border-t-2 border-neutral-800 mt-[30px]">
            <div className="mx-[7.5%]">
                <div className="flex mt-6 justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-5">INFO</h2>
                        {infoLinks.map((infoLinks) => (
                            <Link
                                key={infoLinks.id}
                                children={infoLinks.name}
                                className='mb-1'
                            />
                        ))}
                    </div>
                    <div className="flex flex-col ml-2">
                        <h2 className="text-lg font-bold mb-5">SUPPORT</h2>
                        {supportLinks.map((supportLinks) => (
                            <Link
                                key={supportLinks.id}
                                children={supportLinks.name}
                                className='mb-1'
                            />
                        ))}
                        <h2 className="text-2xl font-bold mt-2">&copy; SAVAGE WATCHES</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;