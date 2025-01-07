import React, { useEffect, useRef, useState } from 'react'
import JobCard from './JobCard'

function About() {
    const PAGE_SIZE = 6
    const isMounted = useRef(true)
    const [jobIds, setJobIds] = useState(null)
    const [jobs, setJobs] = useState([])
    const [page, setPage] = useState(0)
    const[loadingJobs, setLoadingJobs]=useState(false)

    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])

    const fetchJobIds = async (currPage) => {
        let Ids = jobIds
        if (!Ids) {
            const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json").then((res) => res.json())
            Ids = response
        }
        if (!isMounted.current) {
            return;
        }
        setJobIds(Ids)
        const start = currPage * PAGE_SIZE
        const end = start + PAGE_SIZE
        //console.log(Ids.slice(start, end));
        return Ids.slice(start, end)
    }

    const fetchJobDetails = async (currPage) => {
        const allJobIds = await fetchJobIds(currPage)
        setLoadingJobs(true)
        const allJobDetails = await Promise.all(
            allJobIds.map((id) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())
            })
        )
        setLoadingJobs(false)
        if (!isMounted.current) {
            return;
        }
        setJobs([...jobs, ...allJobDetails])
    }

    useEffect(() => {
        fetchJobDetails(page)
    }, [page])

    //console.log(jobs);



    return (
        <div>
            <h1 className='text-orange-500 text-center font-bold text-5xl'>Hacker News Job Board</h1>
            <div>
                {
                    jobIds === null ? 
                    <p className='font-bold text-4xl text-gray-500 text-center mt-10'>Loading...</p> 
                    : 
                        <div className='space-y-4 mt-10 p-5'>{jobs.map((job) => <JobCard key={job.id} {...job} />)}</div>
                }
            </div>
            {
                jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
                    <button 
                    type='button'
                    disabled={loadingJobs}
                    onClick={()=>setPage(page + 1)}
                    className='bg-orange-500 px-5 py-2 rounded-lg text-white block m-auto'
                    >
                    {loadingJobs ? "Loading more jobs..." : "Load more Jobs"}
                    </button>
                )
            }
        </div>
    )
}

export default About