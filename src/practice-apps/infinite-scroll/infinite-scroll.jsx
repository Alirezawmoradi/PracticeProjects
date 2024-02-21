import {HeroSection} from "./compnents/hero-section.jsx";
import useCommentsData from "./hooks/useCommentsData.jsx";
import {Comments} from "./compnents/comments.jsx";
import {useEffect, useState} from "react";

export const InfiniteScroll = () => {
    const [page, setPage] = useState(1);
    const {comments, loading,} = useCommentsData({
        url: `/Comments/${page}`
    })
    const [lastElement, setLastElement] = useState(null);
    const observerRef = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setPage(page + 1)
        }
    })
    useEffect(() => {
        if (lastElement) {
            observerRef.observe(lastElement);
        }
        return () => {
            if (lastElement) {
                observerRef.unobserve(lastElement);
            }
        }
    }, [lastElement]);
    return (
        <div className='container pt-5'>
            <HeroSection/>
            <div className='row'>
                <div className='col-12 pt-5'>
                    {
                        comments.map((comment,index) => {
                            return (
                                <div key={index} ref={setLastElement}>
                                    <Comments {...comment}/>
                                </div>
                            )
                        })
                    }
                    {
                        loading && (
                            <div className='d-flex justify-content-center'>
                                <div className='spinner-border'></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}