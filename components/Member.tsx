import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  id: string
  name: string
  socialId: string
  link: string
}

const Member: React.FC<IProps> = ({ id, name, socialId, link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="rounded-full overflow-hidden relative mb-2"
        style={{ width: 120, height: 120 }}
      >
        <Image
          src={`/assets/team/${id}.jpg`}
          alt={name}
          objectFit="cover"
          layout="fill"
          width={500}
          height={500}
        />
      </div>
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target={'_blank'}>{socialId}</a>
        </Link>
      </div>
    </div>
  )
}

export default Member
