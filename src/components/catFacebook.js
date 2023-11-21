import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function CatFacebook() {
    const selectedRef = useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <>
            <p className='highlighted'>Cat Friends Instagram - Scrolling an image carousel</p>
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1);
                        } else {
                            setIndex(0);
                        }
                    });
                    selectedRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    });
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li
                            key={cat.id}
                            ref={index === i ?
                                selectedRef :
                                null
                            }
                        >
                            <img
                                className={
                                    index === i ?
                                        'active'
                                        : ''
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' + i
    });
}
