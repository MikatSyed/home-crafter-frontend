import React from 'react';

const FeaturedCategories = () => {
    const categories = [
        {
            name: 'Construction',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-01.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg',
        },
        {
            name: 'Car Wash',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-02.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg',
        },
        {
            name: 'Electrical',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-03.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg',
        },
        {
            name: 'Cleaning',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-04.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-09.jpg',
        },
        {
            name: 'Interior',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-05.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg',
        },
        {
            name: 'Carpentry',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-06.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-03.jpg',
        },
        {
            name: 'Computer',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-07.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-06.jpg',
        },
        {
            name: 'Plumbing',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-08.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-11.jpg',
        },
    ];

    return (
        <div className="mx-auto px-6 md:px-[7rem] bg-[#f8fcfd] py-14">
            <div className="section-heading mb-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-indigo-900 leading-tight" >Featured Categories</h2>
                        <p className="text-gray-400 mt-4">What do you need to find?</p>
                    </div>
                    <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
                        <a href="categories.html" className="bg-[#4f46e5] inline-flex items-center  text-white px-4 py-2 rounded">
                            View All
                            <i className="ml-2 feather-arrow-right-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="relative bg-white rounded flex items-center justify-center overflow-hidden group">
                        <a href="service-details.html" className="feature-box p-4 rounded transition flex flex-col items-center justify-center text-center z-10">
                            <div className="feature-icon mb-4">
                                <span className="inline-block p-4 bg-gray-100 rounded-full">
                                    <img src={category.icon} alt="icon" />
                                </span>
                            </div>
                            <h5 className="text-lg font-bold mb-4 text-black group-hover:text-white">{category.name}</h5>
                        </a>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                            <img src={category.img} alt={category.name} className="w-full h-full object-cover transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
