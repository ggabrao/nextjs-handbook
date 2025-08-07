"use client"
import { useEffect, useRef } from "react"
import { Alert, AlertTitle } from "@/components/ui/alert"

export function AnimatedAlert({ value }: { value: number }) {
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const title = titleRef.current
        if (!title) return

        title.classList.remove("scale-110", "text-blue-600", "dark:text-blue-400")
        void title.offsetWidth
        title.classList.add("scale-110", "text-blue-600", "dark:text-blue-400")
        setTimeout(() => {
            title.classList.remove("scale-110", "text-blue-600", "dark:text-blue-400")
        }, 1000)
    }, [value])

    return (
        <Alert>
            <AlertTitle ref={titleRef} className="text-center transition-all duration-1000">
                User ID: {value}
            </AlertTitle>
        </Alert>
    )
}