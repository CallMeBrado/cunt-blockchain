import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@cunt/core';
import { useGetFarmedAmountQuery } from '@cunt/api-react';

export default function FarmCardLastHeightFarmed() {
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const lastHeightFarmed = data?.lastHeightFarmed;

  return (
    <CardSimple
      title={<Trans>Last Height Farmed</Trans>}
      value={<FormatLargeNumber value={lastHeightFarmed} />}
      description={!lastHeightFarmed && <Trans>No blocks farmed yet</Trans>}
      loading={isLoading}
      error={error}
    />
  );
}
