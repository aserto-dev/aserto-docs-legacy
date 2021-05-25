import React from 'react'
import { Heading } from '@chakra-ui/react'
import CustomLink from '../components/CustomLink'

const Sdk = ({ title, icon, github, docs, sample}) => {
  return (
    <div style={{ display: 'flex '}}>
      <img src={`/${icon}`} width='50' alt={title} />
      <Heading as='h3' size='md' style={{
        minWidth: 200,
        marginLeft: 30,
        alignSelf: 'center'
      }}>
        {title}
      </Heading>
      <CustomLink href={github} target='_github' style={{
        alignSelf: 'center',
      }}>
        <i className='fab fa-github' />
        &nbsp;&nbsp;GitHub
      </CustomLink>
      <div style={{ width: 30 }} />
      <CustomLink href={docs} style={{
        alignSelf: 'center',
      }}>
        <span>
          <i className='fas fa-book' />
          &nbsp;&nbsp;Docs
        </span>
      </CustomLink>
      <div style={{ width: 30 }} />
      <CustomLink href={sample} style={{
        alignSelf: 'center'
      }}>
        <i className='fas fa-file-code' />
        &nbsp;&nbsp;Sample
      </CustomLink>
    </div>    
  )
}

export default Sdk