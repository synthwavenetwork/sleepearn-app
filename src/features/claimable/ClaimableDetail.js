import React from 'react';
import { useParams } from 'react-router';
import { useFetchClaimablePoolDetail } from './redux/hooks'
import ClaimDetailItem from './components/claimDetailItem'

export default function ClaimableDetail() {

  const { claimableId } = useParams();

  const poolData = useFetchClaimablePoolDetail(claimableId)

  if (!poolData) return null

  return (
    <>
      <h2 style={{marginLeft: 10}}>{poolData.use.name} claimable</h2>
      {
        poolData.receive.map((item) => {
          return <ClaimDetailItem key={item.name} use={poolData.use} receive={item} />
        })
      }
    </>
  );
}