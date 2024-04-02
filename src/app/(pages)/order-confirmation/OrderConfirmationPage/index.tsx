'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Seu pedido foi bem-sucedido, mas houve um erro ao processar seu pedido.Por gentileza, entre em contato conosco para resolver esse problema.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="Ver conta" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="Ver todos os pedidos"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Obrigado pelo seu pedido!</h1>
          <p>
            {`Seu pedido foi confirmado. Você irá receber um e-mail de confirmação em breve. O número do seu pedido é ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button href={`/account/orders/${orderID}`} label="Ver pedidos" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="Ver todos os pedidos"
              appearance="secondary"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
