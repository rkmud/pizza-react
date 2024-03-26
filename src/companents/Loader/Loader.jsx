import React from 'react'
import { Flex, Spin } from 'antd';
import styles from './Loader.module.scss'
export const Loader = () => {
  return (
    <div className={styles.wrapper}>
        <Flex gap="large">
            <Spin size="large">
                <div className="content" />
            </Spin>
        </Flex>
    </div>
  )
}
