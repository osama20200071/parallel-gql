'use client'
import { PropsWithChildren, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { redirect } from 'next/navigation'
import { useCurrentUserQuery } from '@/gql/authMutations'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [{ data, fetching }] = useCurrentUserQuery()
  useEffect(() => {
    if (!fetching && !data) {
      redirect('/signin')
    }
  }, [fetching, data])

  if (fetching) {
    return (
      <div className="flex flex-1 justify-center items-center h-screen bg-slate-50">
        <h1 className="animate-pulse text-slate-600 text-4xl">Loading..</h1>
      </div>
    )
  }

  return (
    <div className="relative h-screen w-screen bg-slate-50">
      <aside className="absolute left-0 top-0 w-[200px] h-full">
        <Sidebar />
      </aside>
      <main className="w-[calc(100vw-200px)] h-full ml-[200px]">
        <div className="p-3 h-full w-full">
          <div className="rounded-lg border w-full h-full bg-white">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
