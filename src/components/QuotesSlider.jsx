import { useState } from 'react'
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr'

function QuotesSlider() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const quotes = [
        {
            _id: 1,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio necessitatibus provident perferendis doloremque iusto rerum illum voluptate excepturi facere! Sapiente explicabo adipisci voluptatem voluptas natus nobis ex quam fuga.',
            author: 'Jeccica Anderson',
            authorDesignation: 'Student in CSE',
        },
        {
            _id: 2,
            quote: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
            author: 'Les Brown',
            authorDesignation: 'Author',
        },
        {
            _id: 3,
            quote: 'Idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
            author: 'Wolfgang Riebe',
            authorDesignation: 'Keynote Speaker/Magician',
        },
    ];

    const handlePrev = () => {
        setCurrentQuoteIndex(index => {
            if (index > 0) return index - 1
            return index;
        })
    };

    const handleNext = () => {
        setCurrentQuoteIndex(index => {
            if (index < quotes.length - 1) return index + 1
            return index;
        })
    };

    return (
        <div className="px-8 py-5 m-10 xl:h-64 flex flex-col rounded-xl text-white" style={{ backgroundColor: 'rgb(0,128,128, 0.3)' }}>
            <div className="flex-grow">
                <p className="lg:text-lg">{quotes[currentQuoteIndex].quote}</p>
                <p>- {quotes[currentQuoteIndex].author}</p>
                <p className="text-sm pl-2">{quotes[currentQuoteIndex].authorDesignation}</p>
            </div>
            <div className="flex justify-end gap-4">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full text-black flex justify-center items-center"
                    style={{
                        backgroundColor: `${currentQuoteIndex === 0 ? 'rgb(0,128,128)' : '#fff'}`,
                        color: 'transparent'
                    }}
                >
                    <GrLinkPrevious />
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex justify-center items-center"
                    style={{
                        backgroundColor: `${currentQuoteIndex === quotes.length - 1 ? 'rgb(0,128,128)' : '#fff'}`,
                        color: 'transparent'
                    }}
                >
                    <GrLinkNext />
                </button>
            </div>
        </div>
    )
}

export default QuotesSlider