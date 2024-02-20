import {HeroSection} from "./compnents/hero-section.jsx";
import useCommentsData from "./hooks/useCommentsData.jsx";
import {Comments} from "./compnents/comments.jsx";

export const InfiniteScroll = () => {
    const {comments, loading,} = useCommentsData({
        url: '/Comments/1'
    })
    return (
        <div className='container pt-5'>
            <HeroSection/>
            <div className='row'>
                <div className='col-12 pt-5'>
                    {
                        loading ?
                            (
                                <div className='d-flex justify-content-center'>
                                    <div className='spinner-border'></div>
                                </div>
                            )
                            :
                            comments.map((comment) => {
                                return <Comments key={comment.id} {...comment}/>
                            })
                    }

                </div>
            </div>
        </div>
    )
}