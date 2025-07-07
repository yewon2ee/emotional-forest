import React from 'react'
import LeafItem from './LeafItem';

const LeafList = ({posts =[], onPostClick=()=> {}}) => {
  return (
    <div className='list'>
      {posts.map((post) => (
        <LeafItem
            key={post.id}
            post ={post}
            onClick = {()=> onPostClick(post)}
        />
      ))}
    </div>
  )
}

export default LeafList;
