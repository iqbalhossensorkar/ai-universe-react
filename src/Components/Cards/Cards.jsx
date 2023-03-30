import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

const Cards = () => {
    const [cards, setCards] = useState([])
    const [singleData, setSingleData] = useState({})
    const [all, setAll] = useState(false)
    const [uniqueId, setUniqueId] = useState(null)
    // const [examples, setExamples] = useState([]);


    // const generateExamples = () => {
    //     const randomExample = examples[Math.floor(Math.random() * examples.length)];
    //     setExamples(randomExample);
    // }

    const sortHandle = () => {
        const sortedData = cards.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in);
            
        })
        setCards([...cards, sortedData])
    }


    const HandleSeeMore = () => {
        setAll(true);

    }

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setCards(data.data.tools))
    }, [])


    return (
        <>
            <span onClick={sortHandle}><Button>Sort by Date</Button></span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 gap-8 my-20'>
                {
                    cards.slice(0, all ? 12 : 6).map((card) => <Card
                        card={card}
                        key={card.id}
                        setUniqueId={setUniqueId}
                    // random= {generateExamples}
                    >
                    </Card>)
                }
            </div>
            {!all &&
                (<span onClick={HandleSeeMore}>
                    <Button>See More</Button>
                </span>)
            }
            {singleData.id &&
                <Modal 
                singleData={singleData}
            // example={examples}
            >
            </Modal>}
        </>
    );
};

export default Cards;