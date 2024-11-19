'use client'

import { deleteTopic } from '@/actions/topicActions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }: { id: string }) {
  const router = useRouter()

  async function removeTopic() {
    const confirmed = confirm(`Are you sure to delete the topic of ${id}?`)
    if (confirmed) {
      try {
        await deleteTopic(id)
        router.refresh()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
