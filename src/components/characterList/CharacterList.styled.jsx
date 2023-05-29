import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {RxCross2} from "react-icons/rx";
import { mediaQueries } from "../../utils/media-queries";

const List = styled.ul`
  margin: 25px -10px -10px -10px;
  list-style: none;

   @media (min-width: ${mediaQueries.tablet}) {
	  display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 25px -15px -15px -15px;
  }
  @media (min-width: ${mediaQueries.desktop}) {
	  margin: 25px -10px -10px -10px;
  }
`
const Card = styled.li`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;

  &:hover img {
	  transform: scale(1.08);
	  transition: all .3s ease;
  }

   @media (min-width: ${mediaQueries.tablet}) {
	width: 349px;
  height: 349px;
  margin: 15px;
  }
   @media (min-width: ${mediaQueries.desktop}) {
	width: 290px;
  height: 290px;
  margin: 10px;
  }
`
const Name = styled.h2`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 74px;
  color: #fff;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  text-align: center;
  padding: 0 10px;
`
const ImgWrapper = styled.div`
  width: 100%;
  object-fit: contain;
`
const LinkEl = styled(Link)`
  text-decoration: none;
  width: 100%;
`
const Btn = styled(RxCross2)`
  position: absolute;
	z-index: 1;
  color: var(--accent-color);
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.25);
    transition: all .3s ease;
  }
`
const NoItems = styled.p`
  font-size: 20px;
  margin-top: 40px;
  color: var(--text-color);
  text-transform: uppercase;
`

const Image = styled.img`
  width: 100%;
  transition: all .3s ease;
`


export {List, Card, Name, ImgWrapper, LinkEl, Btn, NoItems, Image}