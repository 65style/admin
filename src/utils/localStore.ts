const store = window.localStorage

class LocalStore {
  /**
   * 设置数据： 如果value 是 object 会调用JSON.stringify 自动转换为字符串
   * @param key
   * @param value
   */
  public static set(key: string, value: any) {
    if (!store) return

    let v = value
    try {
      if (typeof value === 'object') {
        v = JSON.stringify(v)
      }

      store.setItem(key, v)
    } catch (error) {}
  }

  /**
   * 直接获取 --- 原始数据
   * @param key
   */
  public static get(key: string) {
    if (!store) return

    return store.getItem(key)
  }

  /**
   * 获取的同时 转换为 JSON
   * @param key
   */
  public static get2Json(key: string) {
    if (!store) return

    const data = store.getItem(key)
    if (data) {
      try {
        return JSON.parse(data)
      } catch (error) {}
    }
  }

  /**
   * 删除
   * @param key
   */
  public static remove(key: string) {
    if (!store) return

    try {
      store.removeItem(key)
    } catch (error) {}
  }
}

export default LocalStore
